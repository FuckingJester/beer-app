import {create} from 'zustand';
import { IProduct } from '../models';

interface stateProduct {
    products : IProduct[],
    selectedProducts : number[],
    setProducts : (newProducts : IProduct[]) => void,
    selectProduct : (id : number) => void,
    deselectProduct : (id: number) => void,
    deleteSelectedProducts: () => void,
}

const useProductStore = create<stateProduct>((set) => ({
    products: [],
    selectedProducts: [],
    setProducts: (newProducts: IProduct[]) =>
        set(state => ({
            products: [...state.products, ...newProducts.filter((newProduct) => {
                return !state.products.some((product) => product.id === newProduct.id);
            })],
        })
        ),
    selectProduct: (id: number) =>
        set(state => ({
            selectedProducts: [
                ...state.selectedProducts, id
            ]
        })),
    deselectProduct: (id : number) => {
        set((state) => ({
            selectedProducts: state.selectedProducts.filter((selectedId) => selectedId !== id),
        }));
    },
    deleteSelectedProducts : () => {
        set((state) => ({
            products: state.products.filter((product) => !state.selectedProducts.includes(product.id)),
            selectedProducts: [],
        }));
    },
}));

export default useProductStore;