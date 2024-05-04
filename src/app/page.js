"use client";
import { useState } from "react";
import DataDisplay from "./DataDisplay";
import SimpleForm from "./SimpleForm";

export default function Home() {
  return (
    <main>
      <SimpleForm />
      <DataDisplay />
    </main>
  );
}
