const views: Record<string, number> = {};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return Response.json({ error: "Missing slug" }, { status: 400 });
  }

  return Response.json({
    slug,
    views: views[slug] || 0,
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  const slug = body.slug;

  if (!slug) {
    return Response.json({ error: "Missing slug" }, { status: 400 });
  }

  views[slug] = (views[slug] || 0) + 1;

  return Response.json({
    slug,
    views: views[slug],
  });
}