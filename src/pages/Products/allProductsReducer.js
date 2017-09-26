import { productsActionTypes } from './actions'

const products = [
    {
        id: '123123-234-2341-123123-123123',
        name: 'Greek amphora',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '101K USD'
    },
    {
        id: '123123-12342-456456-123123-123123',
        name: 'Greek amphora',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '102K USD'
    },
    {
        id: '123123-345-2341-3453-123123',
        name: 'Greek amphora',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '100K USD'
    },
    {
        id: '123123-2342-2341-45345-123123',
        name: 'Greek amphora',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '100K USD'
    },
    {
        id: '123123-12342-234234-123123-234234',
        name: 'Greek amphora',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '100K USD'
    },
    {
        id: '546456-22342-2341-54645-23423',
        name: 'Greek amphora',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '100K USD'
    }
];

const INITIAL_STATE = products;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsActionTypes.ADD_PRODUCT:
      return [
        ...state,
        action.newProduct
      ]

    case productsActionTypes.DELETE_PRODUCT:
      return state.filter(product =>
        product.id !== action.productId
      )

    default:
      return state
  }
};

export const getProductsSelector = (state) => {
    return state.allProducts;
}