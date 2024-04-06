import Northwind from "@/components/northwind/Northwind";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-between p-24 gap-6">
      <Northwind />
    </section>
  );
}
