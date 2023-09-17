'use client';
import React from 'react';
import Image from 'next/image';

export default function index() {
  return (
    <section>
      <div className="py-10">
        <div className="relative w-full aspect-[3]">
          <Image
            src="https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034502.png?updatedAt=1692354524560"
            fill
            style={{ objectFit: 'contain' }}
            alt="global maps photo"
          />
        </div>
      </div>
    </section>
  );
}
