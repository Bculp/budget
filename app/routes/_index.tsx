import type { V2_MetaFunction } from "@remix-run/node";
import { Income } from "~/components/Income/Income";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Mantine Remix App" },
    { name: "description", content: "Welcome to Mantine!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Income />
    </div>
  );
}
