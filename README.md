# Project to schedule barbershop services 💈

## This project was built with the most advanced web development technologies, such as:

### Strucutre
- [Next.JS 14](https://nextjs.org/)
    - Server actions.
        - Create booking
        - List booking
        - Delete booking
    - Server components.
    - Client components (only when necessary).
- [NextAuth.JS](https://next-auth.js.org/)
    - Login with Google accounts.
- [Prisma](https://www.prisma.io/)
    - Building schemas and executing migrations do local database.
    - Seeding our local db.
    - Isolating filters and queries.
- [Postgres](https://www.postgresql.org/)
    - DB running in local environment with the lts version.
- [Docker](https://www.docker.com/)
    - Creating environment to execute our local db.

### Styles
- [TailwindCss](https://tailwindcss.com/)
    - Using Tailwind to style
- [Shadcn-UI](https://ui.shadcn.com/)
    - Getting reusable components for our app


## Introducing the mobile-first pages in the website!

### Home Page
- If user is not logged

![home-page](/public/readme-imgs/home-not-logged.png)

---

- Logging with google accounts

![home-page](/public/readme-imgs/google-pip-up.png)
![home-page](/public/readme-imgs/google-confirm.png)

---

- Home after logged

![home-page](/public/readme-imgs/home-logged.png)

## Is important to reinforce that the user only can book the service, if is logged!


---

### Barbershop Details Page
- Screen with the datails and services of one barbershop

![home-page](/public/readme-imgs/details-barbershop.png)

- If click in "Reservar" button in the services list, will open a menu in the right side:

![home-page](/public/readme-imgs/sheet-empty.png)

- After complete the informations, we'll have:

![home-page](/public/readme-imgs/sheet-full.png)
![home-page](/public/readme-imgs/toast.png)


### Bookings Page

- The bookings page and when we select a booking:

![home-page](/public/readme-imgs/bookings.png)
![home-page](/public/readme-imgs/booking-detail.png)

- Deleting a booking

![home-page](/public/readme-imgs/delete-pop-up.png)
![home-page](/public/readme-imgs/deleted-toast.png)

---

# Constructing the desktop version 🏗️



<!-- ## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
``` -->
