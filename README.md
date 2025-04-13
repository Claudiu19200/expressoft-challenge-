# Challenge Expressoft

## Nice to meet you

Hi! My name is Claudiu, and I’m thrilled to share my work on this project with you.

This challenge was an amazing experience for me. I enjoyed building it from start to finish. Thank you for creating such an engaging task!

I completed all the mandatory and bonus tasks, and even added a few extra features to make the app stand out. You’ll find all the details in the project description below.

## Project

For login 

*username: claudiuBlitz* 
*password: biteblitz*

To be honest, I used _ChatGPT_ at the start to clarify a few concepts, but I fully understand how the project works. I wrote and debugged all the code myself to make sure I learned every part of it.

### How the application is made:

# User Authentication:

- A login page where users enter a username and password to access the app.
- Displays error messages if the credentials are incorrect or fields are empty.
- Includes placeholder buttons for social login options (Facebook, Google, Apple) for a modern feel.

# Navigation:

- A responsive navigation bar with links to "Home" and "Menu" pages, plus a "Logout" option.
- On mobile devices, the navbar collapses into a hamburger menu for easy access.
- Consistent across all pages except the login screen for a smooth user experience.

# Home Page with Recommendations:

- Showcases featured food items (pizzas, burgers, drinks) in a grid of cards.
- Each card displays the item’s name, description, price, and image.
- Clicking a card opens a modal with detailed info about the item.
- A button on each card links to the menu page for ordering.

# Menu Page with Product Browsing:

- Displays all products organized by categories (e.g., Pizza, Burgers, Drinks).
- Users can filter products by category or use a search bar to find specific items.
- A dropdown lets users sort products (though currently limited to basic options).
- Each product card shows its name, description, price, availability, and an image.
- Users can toggle product availability (simulating admin functionality) and add available items to the cart.
- Clicking a product opens a modal with more details.

# Shopping Cart:

- A modal that lists all selected items, including their names, prices, and quantities.
- Users can adjust quantities using plus/minus buttons, with the subtotal, tax (19%), and total updating dynamically.
- Shows an "empty cart" message if nothing is added.
- A "Continue Order" button takes users to a page to enter their details if the cart isn’t empty.

# Order Details Submission:

- A dedicated page where users enter their name, address, and phone number to complete the order.
- Validates that all fields are filled, showing an error if anything is missing.
- On submission, displays a confirmation modal saying the order was sent, then redirects back to the menu.

# Responsive Design:

- Works smoothly on all devices—phones, tablets, and desktops.
- Layouts adjust automatically:
  1.  single-column grids on mobile, multi-column on larger screens;
  2.  font sizes and padding scale for readability
- Modals and forms are centered and sized appropriately for any screen.

# User Feedback:

- Clear visual cues like green/red dots for product availability.
- Modals replace browser alerts for a polished experience (e.g., order confirmation, logout prompt).
- Error messages guide users (e.g., "Please fill in all fields!" on the order details page).

## Challenges faced while building the project

- Initially, I found it challenging to decide how to break the project into smaller components. I wasn’t sure which parts should be separate or how to organize them efficiently. After some trial and error, I learned to identify reusable pieces—like Navbar, ProductCard, and CartModal—which made the code easier to manage and update.

- I hadn’t worked much with Tailwind CSS before this project, so it was a new adventure! It took a bit to get used to classes like sm: or md:

- Creating a responsive app was a bit tricky at first since I started designing for desktop. I used _ChatGPT_ to guide me on how to adjust layouts for mobile and tablet screens.

## Notes

I wrote comments in components to be clear what does some pieces of code

It was an interesting challenge and hope to see you soon! :)
