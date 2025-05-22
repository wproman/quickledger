"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Phone } from "lucide-react";
import { useState } from "react";

const PhonetModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-white text-blue-800 hover:bg-blue-100 px-10 py-5 text-lg font-semibold flex items-center justify-center mx-auto"
        >
          <Phone className="w-5 h-5 mr-2" />
          Talk To An Expert
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">Schedule a Consultation</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Best Time to Call
              </label>
              <select className="w-full px-3 py-2 border rounded-md">
                <option>9AM-12PM</option>
                <option>12PM-3PM</option>
                <option>3PM-6PM</option>
              </select>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Request Call Back
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Or call us directly at</p>
            <a
              href="tel:+8801740066066"
              className="text-blue-600 font-medium text-lg"
            >
              +8801740066066
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhonetModal;
