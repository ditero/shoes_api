'use strict'
const request = require('request');
module.exports = function(models) {
  // body...
  //Find all the shoes on the DB
  const getShoes = async() => {
    return models.Catalogue.find({}, {
      '_id': 0
    })
  }

  //Find the given Size on the DB
  const getiGivenSize = async(givenSize) => {
    return models.Catalogue.find({
      size: givenSize
    }, {
      '_id': 0
    })
  }

  //Find the given Brand on the DB
  const getiGivenBrand = async(givenBrand) => {
    return models.Catalogue.find({
      brand: givenBrand
    }, {
      '_id': 0
    })
  }

  //Find the given SIze and Brand on the DB
  const getGivenSizeAndBrand = async(givenBrand, givenSize) => {
    return models.Catalogue.find({
      brand: givenBrand,
      size: givenSize
    }, {
      '_id': 0
    })
  }
  //Add new stock item into the DB
  const addNewItem = async(item) => {
    return models.Catalogue.create({
      id: item.id,
      brand: item.brand,
      color: item.color,
      size: item.size,
      price: item.price,
      in_stock: item.in_stock
    })

  }
  //Pass JSON Data of all Shoes in stock
  const shoesInStock = async(req, res, next) => {
    let shoes = await getShoes()
    try {
      res.json({
        data: shoes
      })
    } catch (e) {
      return next(e)
    }
  }

  ///Pass JSON Data of shoes matching the given size
  const listGivenSize = async(req, res, next) => {
    let size = req.params.size
    let reqSize = await getiGivenSize(size)
    try {
      res.json({
        data: reqSize
      })
    } catch (e) {
      return next(e)
    }
  }

  //Pass JSON Data of shoes matching the given brand
  const listGivenBrand = async(req, res, next) => {
    let brand = req.params.brandname
    let reqBrand = await getiGivenBrand(brand)
    try {
      res.json({
        data: reqBrand
      })
    } catch (e) {
      return next(e)
    }
  }

  //Pass JSON Data of shoes matching the given size and brand
  const listGivenSizeAndBrand = async(req, res, next) => {
    let givenBrand = req.params.brandname
    let givenSize = req.params.size
    let sizeAndBrand = await getGivenSizeAndBrand(givenBrand, givenSize)
    try {
      res.json({
        data: sizeAndBrand
      })
    } catch (e) {
      return next(e)
    }
  }

  const updateOnPurchase = function(req, res) {

  }

  //Add stock to the DB
  const addNewStock = async(req, res) => {
    let stock = req.body
    let addedItem = await addNewItem(stock)
    console.log(addedItem);
    res.json(addedItem)
  }

  return {
    shoesInStock,
    listGivenSize,
    listGivenBrand,
    listGivenSizeAndBrand,
    updateOnPurchase,
    addNewStock
  }
};
