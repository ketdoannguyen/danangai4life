# Danang AI4Life 2026 | VKU

Independent source copy for `ketdoannguyen/danangai4life`, exported from Site commit
`bd1f415924732b94d4d85087622adcf8a7793b40`. Exporting does not change the original Site.

## Run locally

Requires Node.js 22.13 or newer. No environment variables, credentials or external
services are needed for the published website.

```sh
npm install
npm run dev
```

Open http://localhost:5173. The dev server builds all routes on startup and watches
page source and assets. Refresh after changing files. To choose another address:
`npm run dev -- --host 0.0.0.0 --port 3000`.

```sh
npm run build
npm run verify
npm start
```

`dist/` is the static deployment output, regenerated from source and ignored in Git.
Deploy it at the domain root on a static host supporting directory `index.html`
routes and `404.html`. This export does not enable GitHub Pages automatically;
the root-relative asset URLs require a domain root rather than a repository subpath.

## Source structure

- `src/ai4life/`: the active renderer, static content, CSS and browser interactions.
- `static-assets/`: every published image, thumbnail, logo, font and DOCX document.
- `build.mjs`, `verify.mjs`: static routing/build and consistency checks.
- `scripts/standalone-server.mjs`: independent Node dev/preview server.
- `app/`, `components/`, `hooks/`, `lib/`, `data/`, `db/`, `examples/`, `public/`,
  `build/`, `vendor/`: original framework scaffold and components retained in full.
- `package.sites.json`, `pnpm-lock.yaml`, `vite.config.ts`, other framework configs:
  original Sites framework setup retained for reference. The published Site uses
  the static renderer, so the independent npm scripts do not run the starter app
  or require the archived framework dependencies.
- `.openai/hosting.json`: copied static build setting; the original Site project
  binding has been removed from this independent copy.

The independent `package.json` uses Node's built-in modules to serve the exact
static output. The original dependency manifest is preserved as `package.sites.json`.
All page content, styles, interaction code, images and fonts are byte-for-byte
copies. Only launch/configuration files and this documentation are adapted.

## What is not transferred

ChatGPT Sites' hosting account, project identity, published versions, private
access controls, sign-in sessions, deployment URLs/domain bindings, platform
connector credentials and platform-managed databases are not portable repository
files. This information website does not use a backend, platform database or
connector for its published pages. Its full static data is included. The retained
framework auth/connector scaffold requires platform services if used separately.

Secrets, `.env*`, node_modules, build output, local tooling state and the original
Git history are excluded. SEO canonical metadata retains the original Site URL
to preserve the current output; set a new origin deliberately before deploying
the copy to a new domain.

## Website source notes

Website thông tin cuộc thi, HTML được tạo sẵn cho từng route, không có backend và không thu thập đăng ký.

- `src/ai4life/content.mjs`: dữ liệu sự kiện, lịch, giải thưởng, ban tổ chức, chuyên gia, đồng hành, tin, kết quả, rubric và danh mục ảnh. Metadata nguồn không render.
- `src/ai4life/site.mjs`: shared rendering, nội dung trang chi tiết và logic ngày theo Asia/Ho_Chi_Minh.
- `src/ai4life/client.mjs`: điều hướng disclosure, countdown, bộ lọc URL/Back, accordion hash và modal ảnh có hỗ trợ bàn phím.
- `src/ai4life/style.css`: Inter local, token VKU, responsive và reduced motion.
- `static-assets/assets/ai4life/`: 16 ảnh gốc, logo và thumbnail tối ưu.
- `static-assets/documents/`: hai DOCX gốc 2026.

Sau khi sửa nội dung: `node build.mjs`. Kiểm tra: `node verify.mjs`.

Nguồn gốc ảnh lưu trong `content.mjs`; không biến kết quả lịch sử thành kết quả 2026. InterVariable lấy từ rsms/inter, giấy phép SIL Open Font License, kèm trong static-assets/fonts.

Build output trong `dist/` được tạo lại từ nguồn đã lưu trong Git. Hero Cầu Rồng là minh họa được tạo cho website, tối ưu WebP; chuyển động pan/zoom và ánh sáng bằng CSS, tràn chiều ngang sát menu, chuyển động chỉ chạy khi vùng hero đang hiển thị, hỗ trợ reduced motion.
