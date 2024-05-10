"use client";

import { CartPlus } from "@/assets/icons/CartPlus";
import { Search } from "@/assets/icons/Search";
import Input from "@/components/ui/Input";
import { cn } from "@/config/utils";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import { useState } from "react";

export default function UIKits() {
  const [selectedItem, setSelectedItem] = useState<string | number>("");

  return (
    <main className={cn("mx-10 mt-10 mb-20 space-y-4")}>
      <h1>Buttons</h1>
      <div className="space-x-2">
        <Button
          variant="outlined"
          onClick={() => {
            console.log("baodang");
          }}
        >
          <CartPlus /> Outlined Button
        </Button>
        <Button disabled variant="outlined">
          <CartPlus /> Disabled Outlined Button
        </Button>
        <Button>
          <CartPlus /> Primary Button
        </Button>
        <Button disabled>
          <CartPlus /> Disabled Primary Button
        </Button>
      </div>

      <h1>Inputs</h1>
      <Input
        type="text"
        placeholder="Outlined Input"
        error="Sample error"
        icon={<Search />}
      />
      <Input type="text" placeholder="Outlined Input" icon={<Search />} />
      <Input type="text" disabled placeholder="Disabled Input" />
      <Input
        type="text"
        variant={"standard"}
        placeholder="Standard Input"
        error="Sample error"
        icon={<Search />}
      />
      <Input type="text" variant={"filled"} placeholder="Filled Input" />

      <h1>Dropdown</h1>
      <Dropdown
        size="lg"
        className="w-60"
        defaultValue="HN"
        onChange={(value) => setSelectedItem(value)}
        placeholder="Chọn tỉnh / thành"
        options={[
          { value: "HN", label: "Hà Nội" },
          { value: "HD", label: "Hải Dương" },
          { value: "HP", label: "Hải Phòng" },
          { value: "HB", label: "Hòa Bình" },
          { value: "PT", label: "Phú Thọ" },
          { value: "CB", label: "Cao Bằng" },
        ]}
      />
      <Dropdown
        size="lg"
        onChange={(value, item) => console.log(value, item)}
        // disabled
        placeholder="Chọn tỉnh / thành"
        className="w-60"
        options={[
          { value: "HN", label: "Hà Nội" },
          { value: "HD", label: "Hải Dương" },
          { value: "HP", label: "Hải Phòng" },
        ]}
      />
      <Dropdown
        size="sm"
        placeholder="Sản phẩm"
        options={[
          { value: "qa", label: "Quần áo" },
          { value: "gd", label: "Giày dép" },
        ]}
      />
      <Dropdown
        size="sm"
        disabled
        placeholder="Sản phẩm"
        options={[
          { value: "qa", label: "Quần áo" },
          { value: "gd", label: "Giày dép" },
        ]}
      />
    </main>
  );
}