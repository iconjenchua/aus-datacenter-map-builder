import DataTable from "@/components/DataTable";
import Header from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <DataTable />
    </div>
  );
}
