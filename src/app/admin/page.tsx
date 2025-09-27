'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { formatPrice, formatDate } from '@/lib/utils'
import { Package, Eye, CheckCircle, Truck } from 'lucide-react'

// This would normally come from your database
const mockOrders = [
  {
    id: 'ord_1',
    customerName: 'John Smith',
    email: 'john@example.com',
    product: 'ARCHIVE No.001 - 100ml',
    quantity: 1,
    total: 187.80,
    status: 'paid',
    shippingAddress: {
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    },
    createdAt: new Date('2024-01-15'),
    paymentIntentId: 'pi_1234567890'
  },
  {
    id: 'ord_2',
    customerName: 'Sarah Johnson',
    email: 'sarah@example.com',
    product: 'ARCHIVE No.001 - 100ml',
    quantity: 2,
    total: 359.60,
    status: 'shipped',
    trackingCode: 'UPS1234567890',
    shippingAddress: {
      address: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210'
    },
    createdAt: new Date('2024-01-10'),
    paymentIntentId: 'pi_0987654321'
  }
]

export default function AdminPage() {
  const [orders, setOrders] = useState(mockOrders)
  const [stockCount, setStockCount] = useState(300)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'shipped':
        return <Truck className="h-4 w-4 text-blue-600" />
      case 'delivered':
        return <Package className="h-4 w-4 text-purple-600" />
      default:
        return <Package className="h-4 w-4 text-gray-600" />
    }
  }

  const updateOrderStatus = (orderId: string, newStatus: string, trackingCode?: string) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId 
          ? { ...order, status: newStatus, ...(trackingCode ? { trackingCode } : {}) }
          : order
      )
    )
  }

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const totalBottlesSold = orders.reduce((sum, order) => sum + order.quantity, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-slate-900 tracking-wide mb-2">
            Admin Dashboard
          </h1>
          <p className="text-slate-600 font-light">
            Manage your ARCHIVE No.001 inventory and orders
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Stock Remaining</p>
                <p className="text-2xl font-light text-slate-900">{stockCount}</p>
              </div>
              <Package className="h-8 w-8 text-amber-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Bottles Sold</p>
                <p className="text-2xl font-light text-slate-900">{totalBottlesSold}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Revenue</p>
                <p className="text-2xl font-light text-slate-900">{formatPrice(totalRevenue)}</p>
              </div>
              <div className="text-2xl text-green-600">$</div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Orders</p>
                <p className="text-2xl font-light text-slate-900">{orders.length}</p>
              </div>
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-xl font-light text-slate-900">Recent Orders</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-slate-900">
                          {order.customerName}
                        </div>
                        <div className="text-sm text-slate-500">
                          {order.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                      {order.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                      {order.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                      {formatPrice(order.total)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(order.status)}
                        <span className="ml-2 text-sm text-slate-900 capitalize">
                          {order.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {formatDate(order.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {order.status === 'paid' && (
                        <Button
                          size="sm"
                          onClick={() => {
                            const tracking = prompt('Enter tracking number:')
                            if (tracking) {
                              updateOrderStatus(order.id, 'shipped', tracking)
                            }
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Ship Order
                        </Button>
                      )}
                      {order.status === 'shipped' && order.trackingCode && (
                        <div className="text-xs">
                          <div className="text-slate-500">Tracking:</div>
                          <div className="font-mono text-slate-900">{order.trackingCode}</div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {orders.length === 0 && (
            <div className="px-6 py-12 text-center">
              <Package className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 font-light">No orders yet</p>
            </div>
          )}
        </div>

        {/* Inventory Management */}
        <div className="mt-12 bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-xl font-light text-slate-900 mb-6">Inventory Management</h2>
          
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Stock Count
              </label>
              <input
                type="number"
                min="0"
                max="50"
                value={stockCount}
                onChange={(e) => setStockCount(parseInt(e.target.value) || 0)}
                className="w-24 rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>
            <div className="pt-6">
              <Button
                onClick={() => {
                  alert(`Stock updated to ${stockCount} bottles`)
                }}
                className="bg-slate-900 hover:bg-slate-800 text-white"
              >
                Update Stock
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}