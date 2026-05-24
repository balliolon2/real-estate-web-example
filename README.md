# Grand Avenue Residences — Landing Page

เว็บไซต์ Landing Page สำหรับโครงการอสังหาริมทรัพย์ระดับพรีเมียม สร้างด้วย Next.js, Tailwind CSS และ shadcn/ui

## ✨ Features

- 🌐 รองรับ 2 ภาษา (English / ภาษาไทย)
- 🎨 ดีไซน์หรูหรา Dark Theme พร้อม Scroll Animation
- 🖼️ แกลเลอรีภาพ Carousel แบบ Auto-play
- 📋 แบบแปลนห้อง 3 ประเภท (1 Bed / 2 Bed / Penthouse)
- 📝 แบบฟอร์มลงทะเบียนผ่าน Web3Forms
- 📱 Responsive Design รองรับทุกหน้าจอ

---

## 🚀 Getting Started

### 1. ติดตั้ง Dependencies

```bash
npm install
```

### 2. ตั้งค่า Environment Variables

คัดลอกไฟล์ `.env.example` แล้วเปลี่ยนชื่อเป็น `.env`:

```bash
cp .env.example .env
```

จากนั้นเปิดไฟล์ `.env` แล้วใส่ Access Key ของคุณ:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### 3. รันเซิร์ฟเวอร์

```bash
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) เพื่อดูผลลัพธ์

---

## 🔑 วิธีเปลี่ยน Access Key ของ Web3Forms

แบบฟอร์มลงทะเบียนบนเว็บไซต์ใช้บริการ [Web3Forms](https://web3forms.com) ในการส่งข้อมูลลูกค้ามายังอีเมลของคุณ

### ขั้นตอนที่ 1: สมัครและรับ Access Key

1. เข้าไปที่ [https://web3forms.com](https://web3forms.com)
2. กรอกอีเมลที่ต้องการรับข้อมูลลูกค้า
3. กดปุ่ม **"Create Access Key"**
4. ระบบจะส่ง Access Key ไปยังอีเมลของคุณ (รูปแบบ: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### ขั้นตอนที่ 2: ใส่ Access Key ในโปรเจกต์

**วิธีที่ 1: ผ่านไฟล์ `.env` (แนะนำ ✅)**

เปิดไฟล์ `.env` ที่อยู่ใน root ของโปรเจกต์ แล้วแก้ไข:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=ใส่_access_key_ของคุณตรงนี้
```

> ⚠️ **สำคัญ:** หลังจากแก้ไขไฟล์ `.env` ต้อง **รีสตาร์ทเซิร์ฟเวอร์** (`npm run dev`) ใหม่ทุกครั้ง

**วิธีที่ 2: แก้ไขโดยตรงในโค้ด**

เปิดไฟล์ `src/app/page.tsx` แล้วค้นหาบรรทัด:

```html
<input type="hidden" name="access_key" value="..." />
```

เปลี่ยน value เป็น Access Key ใหม่ของคุณ

### ขั้นตอนที่ 3: ทดสอบ

1. รันเซิร์ฟเวอร์ `npm run dev`
2. เลื่อนลงไปที่แบบฟอร์มลงทะเบียน
3. กรอกข้อมูลทดสอบแล้วกด **ส่ง**
4. เช็คอีเมลที่ลงทะเบียนไว้กับ Web3Forms ว่าได้รับข้อมูลหรือไม่

---

## 📁 โครงสร้างโปรเจกต์

```
src/
├── app/
│   ├── page.tsx          # หน้าหลัก Landing Page
│   ├── layout.tsx        # Layout และ Metadata
│   └── globals.css       # Global Styles
├── components/
│   ├── AnimatedSection.tsx  # คอมโพเนนต์ Scroll Animation
│   └── ui/               # shadcn/ui Components
└── hooks/                # Custom Hooks
```

---

## 🚢 Deploy on Vercel

วิธีที่ง่ายที่สุดในการ Deploy คือใช้ [Vercel](https://vercel.com):

1. Push โค้ดขึ้น GitHub
2. เชื่อมต่อ Repository กับ Vercel
3. ตั้งค่า Environment Variable `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` ใน Vercel Dashboard
4. Deploy!

ดูรายละเอียดเพิ่มเติมที่ [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)
