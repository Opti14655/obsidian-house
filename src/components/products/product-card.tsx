'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatPrice, calculateDiscountPercentage } from '@/lib/utils'
import { Product } from '@/types'
import { ShoppingCart, Star } from 'lucide-react'

interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: string) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discountPercentage = product.originalPrice 
    ? calculateDiscountPercentage(product.originalPrice, product.price)
    : null

  const averageRating = product.reviews?.length
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
    : 0

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Link href={`/products/${product.id}`}>
          {product.images.length > 0 ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
              No Image
            </div>
          )}
        </Link>
        
        {discountPercentage && (
          <Badge className="absolute left-3 top-3 bg-red-500 text-white">
            -{discountPercentage}%
          </Badge>
        )}
        
        {product.featured && (
          <Badge className="absolute right-3 top-3 bg-blue-500 text-white">
            Featured
          </Badge>
        )}
        
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <Badge variant="destructive" className="text-sm">
              Out of Stock
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <Link href={`/products/${product.id}`}>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">{product.brand}</p>
            <h3 className="font-semibold text-gray-900 transition-colors hover:text-blue-600">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500">{product.size}</p>
            
            {product.reviews && product.reviews.length > 0 && (
              <div className="flex items-center space-x-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(averageRating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.reviews.length})
                </span>
              </div>
            )}
          </div>
        </Link>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          <Button
            size="sm"
            onClick={() => onAddToCart?.(product.id)}
            disabled={!product.inStock}
            className="flex items-center space-x-1"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}