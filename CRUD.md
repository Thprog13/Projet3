# 📡 API Endpoints (with Authentication Rules)

## 👤 User

- `GET    /user/:id` → get user details _(🔒 Auth required — only self or admin)_
- `POST   /user` → create new user _(🆓 Public — signup)_
- `PUT    /user/:id` → replace user info _(🔒 Auth required — only self or admin)_
- `PATCH  /user/:id` → update part of user info _(🔒 Auth required — only self or admin)_
- `DELETE /user/:id` → delete user _(🔒 Auth required — only self or admin)_

---

## 🍴 Restaurant

- `GET    /restaurant/:id` → get restaurant details _(🆓 Public)_
- `POST   /restaurant` → create new restaurant _(🔒 Auth required — restaurant owner/admin)_
- `PUT    /restaurant/:id` → replace restaurant info _(🔒 Auth required — owner/admin)_
- `PATCH  /restaurant/:id` → update part of restaurant info _(🔒 Auth required — owner/admin)_
- `DELETE /restaurant/:id` → delete restaurant _(🔒 Auth required — owner/admin)_

---

## 📅 Reservation

- `GET    /reservation/:id` → get reservation details _(🔒 Auth required — user who booked or restaurant owner)_
- `POST   /reservation` → create new reservation _(🔒 Auth required — logged-in user)_
- `PUT    /reservation/:id` → replace reservation _(🔒 Auth required — user who booked)_
- `PATCH  /reservation/:id` → update reservation _(🔒 Auth required — user who booked or restaurant owner for status)_
- `DELETE /reservation/:id` → cancel reservation _(🔒 Auth required — user who booked)_

---

## 📝 Review

- `GET    /review/:id` → get review details _(🆓 Public)_
- `POST   /review` → create new review _(🔒 Auth required — logged-in user, must have past reservation)_
- `PUT    /review/:id` → replace review _(🔒 Auth required — review author)_
- `PATCH  /review/:id` → update review _(🔒 Auth required — review author)_
- `DELETE /review/:id` → delete review _(🔒 Auth required — review author or admin)_

---

## 📃 Optional List Endpoints

- `GET /users` → _(🔒 Admin only)_
- `GET /restaurants` → _(🆓 Public)_
- `GET /reservations` → _(🔒 Admin/owner only)_
- `GET /reviews` → _(🆓 Public)_
