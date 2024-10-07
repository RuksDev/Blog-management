"use client"
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

function NavigationTestPage() {
//Client Side Navigation
  const router = useRouter(); 
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q")
  console.log("Query parameter 'q':", q);

  const handleClick =() => {
    console.log("clicked")
    router.refresh ()
  }

  return (
    <div>
    <Link href={"/"} prefetch={false}>Click Here</Link>
    <button onClick={handleClick}>Write and Redirect</button>
    </div>
    )
}

export default NavigationTestPage