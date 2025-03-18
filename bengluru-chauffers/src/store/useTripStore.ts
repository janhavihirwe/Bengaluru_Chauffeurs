import { create } from "zustand";

interface TripState {
  tripType: string;
  name: string;
  mobileNumber: string;
  pickupLocation: string;
  dropLocation: string;
  pickupDate: string;
  pickupTime: string;
  setTripType: (tripType: string) => void;
  setName: (name: string) => void;
  setMobileNumber: (mobileNumber: string) => void;
  setPickupLocation: (pickupLocation: string) => void;
  setDropLocation: (dropLocation: string) => void;
  setPickupDate: (pickupDate: string) => void;
  setPickupTime: (pickupTime: string) => void;
  resetTrip: () => void;
}

const useTripStore = create<TripState>((set) => ({
  tripType: "",
  name: "",
  mobileNumber: "",
  pickupLocation: "",
  dropLocation: "",
  pickupDate: "",
  pickupTime: "",

  setTripType: (tripType) => set({ tripType }),
  setName: (name) => set({ name }),
  setMobileNumber: (mobileNumber) => set({ mobileNumber }),
  setPickupLocation: (pickupLocation) => set({ pickupLocation }),
  setDropLocation: (dropLocation) => set({ dropLocation }),
  setPickupDate: (pickupDate) => set({ pickupDate }),
  setPickupTime: (pickupTime) => set({ pickupTime }),

  // Reset all fields
  resetTrip: () =>
    set({
      tripType: "",
      name: "",
      mobileNumber: "",
      pickupLocation: "",
      dropLocation: "",
      pickupDate: "",
      pickupTime: "",
    }),
}));

export default useTripStore;
