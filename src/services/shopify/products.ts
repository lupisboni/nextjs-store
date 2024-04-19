import { env } from "app/config/env"
import {shopifyUrls } from "./urls";

export const getProducts = async () => {
    try {
      const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
        headers: new Headers({
          'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
        })
      })
      //throw new Error('Error')
      const { products } = await response.json()
      return products
    } catch (error) {
      console.log(error)
    }
  }