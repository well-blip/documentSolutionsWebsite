import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="columns-1 w-1/2">
        <Card>
          <CardHeader>
            <div className="flex justify-center items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
