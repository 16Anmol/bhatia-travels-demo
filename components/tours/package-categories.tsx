"use client"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PackageGrid from "./package-grid"
import { internationalPackages, domesticPackages } from "@/data/packages"

export default function PackageCategories() {
  const [activeTab, setActiveTab] = useState("international")

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
       <div className="max-w-7xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full bg-white border border-gray-200 h-auto p-1 mb-8">
            <div className="grid w-full grid-cols-2 gap-1">
              <TabsTrigger
                value="international"
                className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-gray-800 font-semibold text-sm py-3 px-4 rounded-md w-full"
              >
                <span className="text-center">
                  <span className="block sm:hidden">International</span>
                  <span className="hidden sm:block">International Tour Packages</span>
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="domestic"
                className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-gray-800 font-semibold text-sm py-3 px-4 rounded-md w-full"
              >
                <span className="text-center">
                  <span className="block sm:hidden">Domestic</span>
                  <span className="hidden sm:block">Domestic Tour Packages</span>
                </span>
              </TabsTrigger>
            </div>
          </TabsList>

          <TabsContent value="international">
            <PackageGrid packages={internationalPackages} />
          </TabsContent>
          <TabsContent value="domestic">
            <PackageGrid packages={domesticPackages} />
          </TabsContent>
        </Tabs>
      </div>
      </div>
    </section>
  )
}
