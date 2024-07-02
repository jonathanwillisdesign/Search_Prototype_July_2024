"use client";

import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import CaretDown from "@/icons/CaretDown";
import CaretUp from "@/icons/CaretUp";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState("default");

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <DropdownMenu.Root onOpenChange={toggleDropdown}>
      <Trigger isOpen={isOpen} />
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white  border border-black shadow-md data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade transition-colors">
          <div className="flex flex-col p-20 border-b border-gray-light">
            <span className="font-bold text-md">Jonny Willis</span>
            <span className="text-gray-dark">jonnywillis@adidas.com</span>
          </div>
          <DropdownMenu.RadioGroup
            value={profile}
            onValueChange={setProfile}
            className="flex flex-col divide-y divide-gray-light"
          >
            <ProfileRadio value="default" name="Profile 1" />
            <ProfileRadio value="secondary" name="Profile 2" />
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function Trigger({ isOpen }: { isOpen: boolean }) {
  return (
    <DropdownMenu.Trigger
      className={`font-semibold flex p-20 rounded-none gap-10 transition-colors ${
        isOpen
          ? "outline-gray-light text-black bg-gray-light"
          : "outline-transparent text-gray-dark"
      } hover:text-black cursor-pointer focus-within:outline-none`}
    >
      <span>Jonny Willis</span>
      {isOpen ? <CaretUp /> : <CaretDown />}
    </DropdownMenu.Trigger>
  );
}

function ProfileRadio({ value, name }: { value: string; name: string }) {
  return (
    <DropdownMenu.RadioItem
      className="p-20 text-sm outline-none cursor-pointer flex flex-row gap-10 transition-colors items-center data-[disabled]:text-gray data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-light data-[highlighted]:text-black"
      value={value}
    >
      <div className="w-20 h-20 border border-1 border-black rounded-full flex items-center justify-center">
        <DropdownMenu.ItemIndicator>
          <div className="w-10 h-10 bg-black rounded-full" />
        </DropdownMenu.ItemIndicator>
      </div>
      <span>{name}</span>
    </DropdownMenu.RadioItem>
  );
}
