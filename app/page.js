import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Fileupload } from "@/components/fileupload";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-2">
        <Card>
          <CardHeader>
            <div className="flex justify-center items-center">
              <Avatar>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/89346584?s=400&v=4"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="container-spacer mb-3 h-3"></div>
            <CardDescription>File Solutions for Everyone</CardDescription>
          </CardHeader>
        </Card>
        {/* Spacer */}

        <div className="container-spacer mb-4 h-10"></div>
        <Card>
          <div className="container-spacer mb-1 h-3"></div>
          <div className="grid grid-cols-1 gap-1 ml-4">
            <div className="flex">
              <div className="flex-none w-14">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 flex-shrink-0"
                  >
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                  </svg>
                </div>
              </div>
              <div className="flex-none w-14">
                <div className="text-base">Home</div>
              </div>
            </div>
            <hr className="h-3 border-0 "></hr>
            <div className="flex">
              <div className="flex-none w-14">
                <div className="flex">
                  <svg
                    data-slot="icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-8"
                  >
                    <path d="M3 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.25 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 7.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 11.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM4 12.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex-none w-14">
                <div className="text-base">Files</div>
              </div>
            </div>
            <hr className="h-1 border-0"></hr>
            <div className="flex">
              <div className="flex-none w-14">
                <div className="flex">
                  <svg
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-5"
                  >
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex-none w-3/4">
                <div className="text-base">Saved Files</div>
              </div>
            </div>
            <hr className="h-1 border-0"></hr>
          </div>
        </Card>
      </div>
      <div className="col-span-6">
        <Fileupload />
      </div>
      <div className="col-span-3">
        <Card>
          <div className="text-base m-4 font-semibold">History</div>
          <div className="columns-1 w-full bg-slate-400"></div>
        </Card>
      </div>
    </div>
  );
}
