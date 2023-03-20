export async function loadPost(id: string) {
  let raw: string | null;
  try {
    raw = await Deno.readTextFile(`./content/post/${id}.md`);
  } catch {
    raw = null;
  }
  return raw;
}
