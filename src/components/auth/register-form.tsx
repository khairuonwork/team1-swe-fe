"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function RegisterForm() {
  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl space-y-6 border">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold">Buat Akun</h1>
        <p className="text-sm text-muted-foreground">
          Mulai karir impian kamu di{" "}
          <span className="font-semibold">Career.ly</span>! 🚀
        </p>
      </div>

      {/* Google Button */}
      <Button variant="outline" className="w-full flex items-center gap-2">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          className="w-5 h-5"
          alt="Google"
        />
        Masuk dengan Google
      </Button>

      <Separator className="my-2" />

      {/* Form Inputs */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">
            Nama Lengkap<span className="text-red-500"> *</span>
          </label>
          <Input placeholder="Masukkan nama Anda" />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Email<span className="text-red-500"> *</span>
          </label>
          <Input placeholder="Masukkan email Anda" type="email" />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Password<span className="text-red-500"> *</span>
          </label>
          <Input placeholder="Masukkan password Anda" type="password" />
          <p className="text-xs text-muted-foreground mt-1">
            Password harus setidaknya 8 karakter, termasuk nomor dan karakter
            spesial
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Konfirmasi Password<span className="text-red-500"> *</span>
          </label>
          <Input placeholder="Konfirmasi password Anda" type="password" />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
        >
          Lanjutkan
        </Button>
      </form>

      {/* Footer */}
      <div className="text-center text-sm">
        Sudah punya akun?{" "}
        <Link href="/login" className="font-semibold hover:underline">
          Masuk
        </Link>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Dengan membuat akun, kamu setuju dengan{" "}
        <span className="font-semibold underline">kebijakan privasi</span> kami
      </p>
    </div>
  );
}
