import { prisma } from './prisma'

const sampleProducts = [
  {
    name: "ARCHIVE No.001",
    description: "Our inaugural fragrance - a masterfully crafted Archive-inspired blend that embodies the essence of luxury and exclusivity. Opening with vibrant mango, bergamot, and blackcurrant, transitioning to a heart of birch, patchouli, and jasmine, before settling into a rich base of musk, oakmoss, ambergris, and vanilla. Presented in a crystal glass bottle with premium black rigid packaging and gold foil interior. Each bottle includes authentication card and protective velvet pouch. 6-8 hour longevity with moderate to strong projection.",
    price: 160.00,
    brand: "Obsidian House",
    category: "men",
    size: "100ml",
    stockCount: 9,
    images: ["/images/manuscript-001.jpg"],
    featured: true
  }
]

export async function seedDatabase() {
  try {
    console.log('Starting database seed...')

    // Clear existing products
    await prisma.product.deleteMany({})
    
    // Create sample products
    for (const product of sampleProducts) {
      await prisma.product.create({
        data: product
      })
      console.log(`Created product: ${product.name}`)
    }

    console.log('Database seeded successfully!')
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  }
}

// Run the seed function if this file is executed directly
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('Seed completed')
      process.exit(0)
    })
    .catch((error) => {
      console.error('Seed failed:', error)
      process.exit(1)
    })
}