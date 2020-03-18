# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2019-01-25
### Added
- Simple shop
- Task 1 has been done

## [2.0.0] - 2019-02-16
### Added
- Bootstrap and styles
- Task 2 has been done
- Disabling the 'Add' button if the item is not in stock
- Button to open / hide the cart
- Receiving quantity of items
- Display in cart total cost and total amount
- Change of quantity, removing of item from the cart
- Delivery address

### Changed
- The application is divided into modules
- Correction of mistakes of the first task

## [3.0.0] - 2019-03-01
### Added
- AboutComponent with ConfigOptionsService, ConstantService and GeneratorFactory has been added
- SharedModule and LayoutModule have been added
- LocalStorageService for saving the cart has been added
### Changed
- Methods of CartService have been renamed
- When you click on products in the basket, a green frame appears

## [4.0.0] - 2019-03-01
### Added
- The following pipes have been added:
  OrderByPipe for cart
  async for product-list
  currency, date for cart-item

## [5.0.0] - 2019-03-19
### Added
- Admin module with canActivateGuard, resolveGuard
- Routing for the application, admin module, products, cart
- AuthGuard, CanLoad, LoadChildren, Reacting to Router Events (Title), Meta Service
- LocalStorage to the core services
