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

| STT | Người phụ trách | Tính năng                                               | Mô tả                                               |
| --: | :-------------: | :------------------------------------------------------ | :-------------------------------------------------- |
|   1 |      Điểm       | Register, Login, Logout, Comment                        | Đăng ký, Đăng nhập, Đăng xuất và Bình luận resource |
|   2 |      Bách       | Manage resources                                        | CRUD resources                                      |
|   3 |     Trường      | Chat (Admin)                                            | Chức năng chat với vai trò Admin                    |
|   4 |       Duy       | Chat (User)                                             | Chức năng chat với vai trò User                     |
|   5 |      Bách       | Header-Footer + 4 trang Home                            |
|   6 |       Duy       | 5 trang đầu Product                                     |
|   7 |     Trường      | 4 trang cuối Product + OTT                              |
|   8 |      Điểm       | các trang free trial, support, about us, talk to export |

## 4. Cấu trúc thư mục

| STT | Folder     | Ý nghĩa                                                                    |
| --: | :--------- | :------------------------------------------------------------------------- |
|   1 | api        | Tạo axios_instance dùng khi gọi call Api, tạo các phương thức gọi Api      |
|   2 | components | Chứa các component có thể tái sử dụng ở các project khác nhau             |
|   3 | configs    | Chứa các biến logic hoặc cấu hình ứng dụng                                 |
|   4 | constants  | Chứa các hằng số                                                           |
|   5 | pages      | Chứa các pages(route)                                                       |
|   6 | redux      | Chức các cấu hình reducer, actions, store                                    |
|   7 | router     | Chứa các route                                                             |
|   8 | themes     | Chứa các màu, style                                                        |
|   9 | types      | Chứa các propstype dùng chung                                              |
|  10 | utils      | Chứa các phương thức dùng chung, không phụ thuộc vào ngữ cảnh của ứng dụng |
