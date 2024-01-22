import { getUser, getUsers } from "@/src/utils/panel-api";

export async function GET(req: Request, res: Response) {
  console.log("req", req);
  const data = await getUsers();

  return Response.json({ data });
}
export async function POST(req: Request, res: Response) {
  console.log("req", req);
  const data = await getUser(1);

  return Response.json({ data });
}
