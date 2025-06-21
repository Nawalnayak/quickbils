import { BarChart3, Table, Receipt } from "lucide-react";

export function PosDashboard() {
  return (
    <section className="scroll-section bg-[hsl(210,24%,16%)] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Restaurant Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Track every order. Print every bill. Manage everything.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Dashboard Preview */}
          <div className="relative">
            {/* Laptop Dashboard */}
            <div className="bg-gray-800 rounded-2xl p-4 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="bg-gray-50 p-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Dashboard</h3>
                    <div className="flex space-x-4">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Active: 24
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        Revenue: ₹45,680
                      </div>
                    </div>
                  </div>

                  {/* Table Grid */}
                  <div className="grid grid-cols-6 gap-3 mb-6">
                    {Array.from({ length: 18 }, (_, i) => (
                      <div
                        key={i}
                        className={`
                          aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                          ${i % 4 === 0 ? 'bg-green-100 text-green-800' : 
                            i % 4 === 1 ? 'bg-blue-100 text-blue-800' : 
                            i % 4 === 2 ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-gray-100 text-gray-600'}
                        `}
                      >
                        T{i + 1}
                      </div>
                    ))}
                  </div>

                  {/* Recent Orders */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold mb-3">Recent Orders</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Table 12 - Order #1234</span>
                        <span className="text-green-600">₹850</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Table 5 - Order #1235</span>
                        <span className="text-green-600">₹1,250</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Mobile View */}
            <div className="absolute -bottom-8 -right-8 animate-float">
              <div className="w-32 h-48 bg-gray-900 rounded-2xl p-1 shadow-xl">
                <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                  <div className="p-3">
                    <div className="text-xs font-semibold mb-2">Staff App</div>
                    <div className="space-y-2">
                      <div className="bg-red-100 text-red-800 p-2 rounded text-xs">
                        New Order: T15
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 p-2 rounded text-xs">
                        Ready: T8
                      </div>
                      <div className="bg-green-100 text-green-800 p-2 rounded text-xs">
                        Served: T12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-8">Complete Restaurant Management</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(24,100%,66%)] rounded-full flex items-center justify-center">
                  <BarChart3 className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Real-time Analytics</h4>
                  <p className="text-gray-300">Monitor sales, popular items, and customer patterns in real-time</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(24,100%,66%)] rounded-full flex items-center justify-center">
                  <Table className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Table Management</h4>
                  <p className="text-gray-300">Visual table layout with order status and occupancy tracking</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[hsl(24,100%,66%)] rounded-full flex items-center justify-center">
                  <Receipt className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Smart Billing</h4>
                  <p className="text-gray-300">Automated GST calculations and professional invoice generation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
