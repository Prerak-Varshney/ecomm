"use client";
import { useState } from "react";
import FilterPanel from "./FilterPanel";
import FilterPanelItem from "./FilterPanelItem";
import ColorChoice from "./ColorChoice";
import Button from "./Button";
import { HOT_DEALS_DATA, BRAND_DATA, COLORS_DATA } from "../data/Filterpanel";

const Sidebar = () => {
    const [selectedHotDeal, setSelectedHotDeal] = useState<{ title: string, count: number } | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<{ title: string, count: number } | null>(null);
    const [selectedColor, setSelectedColor] = useState<{ name: string, color: string } | null>(null);

    return (
        <div className={`w-90 h-full bg-background flex flex-col items-center justify-start py-6 gap-y-6 overflow-y-auto scrollbar-hide scroll-smooth`}>
            <FilterPanel title="Hot Deals">
                {
                    HOT_DEALS_DATA.map((item, index) => (
                        <FilterPanelItem key={index} title={item.title} count={item.count} selectedItem={selectedHotDeal} setSelectedItem={setSelectedHotDeal} />
                    ))
                }
            </FilterPanel>

            <FilterPanel title="COLOR">
                <div className={`w-full py-3.25 flex items-center justify-between text-sm px-6 bg-[var(--secondary-background)] cursor-pointer transition-transform duration-300 ease-in-out`}>
                {
                    COLORS_DATA.map((color) => (
                        <ColorChoice key={color.name} colorName={color.name} color={color.color} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
                    ))
                }
                </div>

            </FilterPanel>

            <FilterPanel title="BRAND">
                {
                    BRAND_DATA.map((item, index) => (
                        <FilterPanelItem key={index} title={item.title} count={item.count} selectedItem={selectedBrand} setSelectedItem={setSelectedBrand} />
                    ))
                }
            </FilterPanel>

            <Button title="MORE" />
        </div>
    )
}

export default Sidebar;