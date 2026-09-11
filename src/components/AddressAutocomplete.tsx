"use client";

import { useEffect, useRef, useState } from "react";
import { EMPTY_VERIFIED_ADDRESS, type VerifiedAddress } from "@/lib/address";

type AddressAutocompleteProps = {
  value: string;
  onChange: (value: string) => void;
  onSelect: (address: VerifiedAddress) => void;
  inputClassName: string;
  required?: boolean;
  dark?: boolean;
};

type GooglePlace = google.maps.places.PlaceResult;

let googleMapsPromise: Promise<void> | null = null;

function loadGoogleMaps() {
  if (typeof window === "undefined") return Promise.reject(new Error("Browser required"));
  if (window.google?.maps?.places) return Promise.resolve();
  if (googleMapsPromise) return googleMapsPromise;

  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!key) return Promise.reject(new Error("Google Maps API key is not configured."));

  googleMapsPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-google-maps="places"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Google Maps failed to load.")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&libraries=places&language=en&region=NZ`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = "places";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Google Maps failed to load."));
    document.head.appendChild(script);
  });
  return googleMapsPromise;
}

function getComponent(place: GooglePlace, type: string) {
  return place.address_components?.find((component) => component.types.includes(type))?.long_name ?? "";
}

function parseAddress(place: GooglePlace): VerifiedAddress {
  const streetNumber = getComponent(place, "street_number");
  const route = getComponent(place, "route");
  return {
    formattedAddress: place.formatted_address ?? "",
    placeId: place.place_id ?? "",
    latitude: place.geometry?.location?.lat() ?? null,
    longitude: place.geometry?.location?.lng() ?? null,
    postcode: getComponent(place, "postal_code"),
    suburb: getComponent(place, "sublocality_level_1") || getComponent(place, "neighborhood"),
    city: getComponent(place, "locality") || getComponent(place, "administrative_area_level_2"),
    region: getComponent(place, "administrative_area_level_1"),
    country: getComponent(place, "country"),
    streetAddress: [streetNumber, route].filter(Boolean).join(" "),
  };
}

export default function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  inputClassName,
  required = false,
  dark = false,
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const onChangeRef = useRef(onChange);
  const onSelectRef = useRef(onSelect);
  const [loadError, setLoadError] = useState(false);

  onChangeRef.current = onChange;
  onSelectRef.current = onSelect;

  useEffect(() => {
    let active = true;
    loadGoogleMaps()
      .then(() => {
        if (!active || !inputRef.current || !window.google?.maps?.places) return;
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
          types: ["address"],
          componentRestrictions: { country: "nz" },
          fields: ["address_components", "formatted_address", "geometry", "place_id"],
        });
        autocompleteRef.current = autocomplete;
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          const parsed = parseAddress(place);
          if (parsed.placeId && parsed.formattedAddress) {
            onChangeRef.current(parsed.formattedAddress);
            onSelectRef.current(parsed);
          }
        });
      })
      .catch(() => {
        if (active) setLoadError(true);
      });

    return () => {
      active = false;
      if (autocompleteRef.current) {
        window.google?.maps?.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative z-20">
      <input
        ref={inputRef}
        type="text"
        required={required}
        placeholder="Start typing the property address"
        className={inputClassName}
        value={value}
        autoComplete="street-address"
        onChange={(event) => {
          onChange(event.target.value);
          onSelect({ ...EMPTY_VERIFIED_ADDRESS });
        }}
      />
      <p className={`mt-2 text-xs ${dark ? "text-white/50" : "text-gray-400"}`}>
        Select an address from the suggestions so we can verify the property location.
      </p>
      {loadError && (
        <p className="mt-1 text-xs text-amber-600" role="status">
          Address suggestions are unavailable right now. Please refresh and try again.
        </p>
      )}
    </div>
  );
}
