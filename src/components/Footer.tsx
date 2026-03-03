export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#0D1117] px-[5%] py-8 text-center">
      <div className="mx-auto max-w-[1000px]">
        <p className="text-sm text-muted-foreground">
          Designed &amp; built by{" "}
          <span className="font-medium text-white/80">
            Aril Ibbet Ardana Putra
          </span>{" "}
          with React &amp; TypeScript &middot; &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
