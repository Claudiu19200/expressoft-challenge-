export interface Product {
  id: string
  name: string
  description: string
  price: number
  available: boolean
}

export interface MenuCategory {
  id: string
  category: string
  products: Product[]
}

export const menuData: MenuCategory[] = [
  {
    id: '4f2c93a5-1cb7-4b3a-9819-fb43a17e1fc7',
    category: 'Pizza',
    products: [
      {
        id: 'd3c2b1f0-512a-4f0b-bcc3-0a8cfc43b241',
        name: 'Margherita',
        description: 'Sos de roșii, mozzarella, busuioc',
        price: 25,
        available: true
      },
      {
        id: '1be48f7f-1052-42dc-80b7-607ba8a34a7a',
        name: 'Quattro Formaggi',
        description: 'Mozzarella, gorgonzola, parmezan, brie',
        price: 30,
        available: true
      },
      {
        id: '2c9d7e8a-3f1b-4a9c-b7d2-5e6f9a0b1c2d',
        name: 'Pepperoni',
        description: 'Sos de roșii, mozzarella, salam picant',
        price: 28,
        available: true
      },
      {
        id: '3a8b6c9d-4e2f-4b0a-9c1d-6f7e8a9b0c1d',
        name: 'Prosciutto e Funghi',
        description: 'Șuncă, ciuperci, mozzarella',
        price: 29,
        available: true
      },
      {
        id: '4b9c7d0e-5f3a-4c1b-a0d2-7e8f9b0c1d2e',
        name: 'Diavola',
        description: 'Salam picant, ardei iute, mozzarella',
        price: 28,
        available: false
      },
      {
        id: '5c0d8e1f-6a4b-4d2c-b1e3-8f9a0b1c2d3f',
        name: 'Capricciosa',
        description: 'Șuncă, ciuperci, măsline, anghinare',
        price: 32,
        available: true
      },
      {
        id: '6d1e9f2a-7b5c-4e3d-c2f4-9a0b1c2d3e4a',
        name: 'Hawaiiană',
        description: 'Șuncă, ananas, mozzarella',
        price: 27,
        available: true
      },
      {
        id: '7e2f0a3b-8c6d-4f4e-d3a5-0b1c2d3e4f5b',
        name: 'Vegetariană',
        description: 'Ardei, ceapă, ciuperci, măsline, porumb',
        price: 26,
        available: true
      },
      {
        id: '8f3a1b4c-9d7e-4a5f-e4b6-1c2d3e4f5a6c',
        name: 'Tonno e Cipolla',
        description: 'Ton, ceapă roșie, mozzarella',
        price: 29,
        available: true
      },
      {
        id: '9a4b2c5d-0e8f-4b6a-f5c7-2d3e4f5a6b7d',
        name: 'Pizza BBQ Chicken',
        description: 'Pui, sos BBQ, ceapă, mozzarella',
        price: 30,
        available: true
      },
      {
        id: '0b5c3d6e-1f9a-4c7b-a6d8-3e4f5a6b7c8e',
        name: 'Pizza Carbonara',
        description: 'Ou, pancetta, parmezan, piper negru',
        price: 31,
        available: false
      },
      {
        id: '1c6d4e7f-2a0b-4d8c-b7e9-4f5a6b7c8d9f',
        name: 'Pizza Quattro Stagioni',
        description: 'Ciuperci, șuncă, măsline, anghinare',
        price: 32,
        available: true
      },
      {
        id: '2d7e5f8a-3b1c-4e9d-c8f0-5a6b7c8d9e0a',
        name: 'Pizza Bufalina',
        description: 'Mozzarella di bufala, roșii cherry, rucola',
        price: 34,
        available: true
      },
      {
        id: '3e8f6a9b-4c2d-4f0e-d9a1-6b7c8d9e0f1b',
        name: 'Pizza Trufata',
        description: 'Cremă de trufe, mozzarella, ciuperci',
        price: 35,
        available: true
      },
      {
        id: '4f9a7b0c-5d3e-4a1f-e0b2-7c8d9e0f1a2c',
        name: 'Pizza Calzone',
        description: 'Pizza rulată umplută cu șuncă, brânză și sos',
        price: 28,
        available: true
      }
    ]
  },
  {
    id: 'e48fc123-4c7d-4a8d-b0d4-1a5439f3fc2f',
    category: 'Burgeri',
    products: [
      {
        id: 'c104a4e0-c76f-4040-9ec9-0fc68c31f7ec',
        name: 'Classic Cheeseburger',
        description: 'Vită, cheddar, salată, roșii, ceapă, sos burger',
        price: 20,
        available: true
      },
      {
        id: 'eb9bda67-2f1b-4a8e-b45a-58b8362f25ed',
        name: 'Double Bacon Burger',
        description: '2 chiftele, bacon, cheddar, ceapă crocantă',
        price: 28,
        available: true
      },
      {
        id: 'fc0a8e1b-3a2c-4b9d-c56d-69e7f0a1b2c3',
        name: 'Chicken Burger',
        description: 'Piept de pui pane, salată, maioneză',
        price: 22,
        available: true
      },
      {
        id: 'ad1b9f2c-4b3d-4c0e-d67e-7a8f0b1c2d4e',
        name: 'BBQ Burger',
        description: 'Carne de vită, sos BBQ, ceapă caramelizată, brânză',
        price: 24,
        available: true
      },
      {
        id: 'be2c0a3d-5c4e-4d1f-e78f-8b9a0c1d2e5f',
        name: 'Spicy Jalapeño Burger',
        description: 'Jalapeños, sos picant, brânză, carne de vită',
        price: 23,
        available: false
      },
      {
        id: 'cf3d1b4e-6d5f-4e2a-f89a-9c0b1d2e3f6a',
        name: 'Mushroom Swiss Burger',
        description: 'Ciuperci trase în unt, brânză Swiss',
        price: 25,
        available: true
      },
      {
        id: 'da4e2c5f-7e6a-4f3b-a9bc-0d1c2e3f4a7b',
        name: 'Pulled Pork Burger',
        description: 'Carne de porc gătită lent, sos BBQ, varză murată',
        price: 26,
        available: true
      },
      {
        id: 'eb5f3d6a-8f7b-4a4c-b0cd-1e2d3f4a5b8c',
        name: 'Vegan Burger',
        description: 'Chiftea vegetală, avocado, roșii, salată',
        price: 22,
        available: true
      },
      {
        id: 'fc6a4e7b-9a8c-4b5d-c1de-2f3e4a5b6c9d',
        name: 'Fish Burger',
        description: 'File de pește pane, sos tartar, salată',
        price: 23,
        available: true
      },
      {
        id: 'ad7b5f8c-0b9d-4c6e-d2ef-3a4f5b6c7d0e',
        name: 'Egg & Bacon Burger',
        description: 'Ou prăjit, bacon, cheddar',
        price: 24,
        available: true
      },
      {
        id: 'be8c6a9d-1c0e-4d7f-e3fa-4b5a6c7d8e1f',
        name: 'Italian Burger',
        description: 'Mozzarella, roșii uscate, pesto',
        price: 25,
        available: true
      },
      {
        id: 'cf9d7b0e-2d1f-4e8a-f4ab-5c6b7d8e9f2a',
        name: 'Mexican Burger',
        description: 'Guacamole, nachos, carne picantă',
        price: 26,
        available: false
      },
      {
        id: 'da0e8c1f-3e2a-4f9b-a5bc-6d7c8e9f0a3b',
        name: 'Blue Cheese Burger',
        description: 'Brânză cu mucegai, ceapă roșie, rucola',
        price: 27,
        available: true
      },
      {
        id: 'eb1f9d2a-4f3b-4a0c-b6cd-7e8d9f0a1b4c',
        name: 'Greek Burger',
        description: 'Carne de miel, tzatziki, roșii, ceapă',
        price: 28,
        available: true
      },
      {
        id: 'fc2a0e3b-5a4c-4b1d-c7de-8f9e0a1b2c5d',
        name: 'Truffle Burger',
        description: 'Cremă de trufe, brânză fină, carne de vită premium',
        price: 30,
        available: true
      }
    ]
  },
  {
    id: '5f42a9e7-e98a-4727-9f3a-0c86b4d6c02b',
    category: 'Băuturi',
    products: [
      {
        id: '7e20f2e4-9b88-4a01-9932-e15a7cf5d4e0',
        name: 'Coca-Cola',
        description: 'Suc carbogazos clasic',
        price: 8,
        available: true
      },
      {
        id: '39f3ae77-0a70-4c7b-8d8d-cf84c2e5f08d',
        name: 'Fanta',
        description: 'Suc de portocale carbogazos',
        price: 8,
        available: true
      },
      {
        id: '4a04bf88-1b81-4d8c-9e9e-da95d3f6a19e',
        name: 'Sprite',
        description: 'Suc de lămâie carbogazos',
        price: 8,
        available: true
      },
      {
        id: '5b15ca99-2c92-4e9d-afaf-eb06e4a7b2af',
        name: 'Apă plată',
        description: 'Apă pură, necarbogazoasă',
        price: 5,
        available: true
      },
      {
        id: '6c26db0a-3d03-4f0e-b0ba-fc17f5b8c3ba',
        name: 'Apă minerală',
        description: 'Apă carbogazoasă',
        price: 5,
        available: true
      },
      {
        id: '7d37ec1b-4e14-4a1f-c1cb-ad28a6c9d4cb',
        name: 'Limonadă clasică',
        description: 'Lămâie și zahăr, răcoritoare',
        price: 10,
        available: true
      },
      {
        id: '8e48fd2c-5f25-4b2a-d2dc-be39b7dae5dc',
        name: 'Limonadă cu mentă și ghimbir',
        description: 'Lămâie, mentă, ghimbir proaspăt',
        price: 12,
        available: true
      },
      {
        id: '9f59ae3d-6a36-4c3b-e3ed-cf4ac8ebf6ed',
        name: 'Ice Tea piersici',
        description: 'Ceai rece cu aromă de piersici',
        price: 9,
        available: true
      },
      {
        id: '0a6abf4e-7b47-4d4c-f4fe-da5bd9fcfa7e',
        name: 'Fresh de portocale',
        description: 'Suc proaspăt stors de portocale',
        price: 14,
        available: true
      },
      {
        id: '1b7bca5f-8c58-4e5d-a5af-eb6ce0ade8af',
        name: 'Milkshake ciocolată',
        description: 'Milkshake cremos cu ciocolată',
        price: 15,
        available: true
      },
      {
        id: '2c8cdb6a-9d69-4f6e-b6ba-fc7df1bef9ba',
        name: 'Milkshake vanilie',
        description: 'Milkshake cremos cu vanilie',
        price: 15,
        available: true
      },
      {
        id: '3d9dec7b-0e7a-4a7f-c7cb-ad8ea2cafbcb',
        name: 'Milkshake căpșuni',
        description: 'Milkshake cremos cu căpșuni',
        price: 15,
        available: true
      }
    ]
  }
]
