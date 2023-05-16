# Getting Started with Create React App

Sigma landing page project

## 1. Phân tích yêu cầu

### 1.1 Phân tích yêu cầu phần mềm

- [Đặc tả](https://app.diagrams.net/#G1ecqKUyCh5-1AF0sOgjJiBOUyzfqH9UUY)

### 1.2 Thiết kế giao diện

- [Giao diện](https://www.figma.com/file/4QEAa0Hn6RKiqz5ND3Lcpk/Sigma-thudomultimedia?type=design&t=bA9fTXIla1OL7c6g-0)

## 2. Lựa chọn công nghệ

- Ngôn ngữ lập trình: [Typescript](https://www.typescriptlang.org/)
- UI compent: [Ant Design](https://ant.design/)
- CSS Framework: [Tailwind](https://tailwindcss.com/)
- Coding style guide: [Airbnb](https://github.com/airbnb/javascript)
- Giao thức giao tiếp: `HTTP` và `Websocket` (chức năng chat realtime)
- Thư viện:
  - [React](https://react.dev/): xây dựng giao diện phía người dùng
  - [Redux](https://redux.js.org/): quản lý trạng thái ứng dụng
  - [Axios](https://github.com/axios/axios): gọi API
  - [CKEditor](https://ckeditor.com/): soạn thảo bài viết (resource)

## 3. Phân chia công việc

| STT | Người phụ trách | Tính năng                        | Mô tả                                               |
| --: | :-------------: | :------------------------------- | :-------------------------------------------------- |
|   1 |                 | Register, Login, Logout, Comment | Đăng ký, Đăng nhập, Đăng xuất và Bình luận resource |
|   2 |                 | Manage resources                 | CRUD resources                                      |
|   3 |                 | Chat (Admin)                     | Chức năng chat với vai trò Admin                    |
|   4 |                 | Chat (User)                      | Chức năng chat với vai trò User                     |
