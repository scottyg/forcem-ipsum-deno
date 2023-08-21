import { forcem } from "../mod.ts";
import {
  assertEquals,
  assertStringIncludes,
} from "https://deno.land/std@0.199.0/assert/mod.ts";

const LENGTH = 5;

Deno.test("length test", () => {
  const text = forcem("4", LENGTH);
  assertEquals(text.length, LENGTH);
});

Deno.test("episode 1 test", () => {
  const text = forcem("1", LENGTH);
  assertStringIncludes(
    text[0],
    "Captain. Yes, sir? Tell them we wish to board at once.",
  );
});

Deno.test("episode 4 test", () => {
  const text = forcem("4", LENGTH);
  assertStringIncludes(
    text[0],
    "Did you hear that? They've shut down the main reactor.",
  );
});

Deno.test("episode 5 test", () => {
  const text = forcem("5", LENGTH);
  assertStringIncludes(
    text[0],
    "Echo Three to Echo Seven. Han, old buddy, do you read me?",
  );
});

Deno.test("episode 6 test", () => {
  const text = forcem("6", LENGTH);
  assertStringIncludes(
    text[0],
    "Command station, this is ST 321. Code Clearance Blue.",
  );
});

Deno.test("episode 7 test", () => {
  const text = forcem("7", LENGTH);
  assertStringIncludes(
    text[0],
    "This will begin to make things right. I've traveled too far, and seen too much, to ignore the despair in the galaxy.",
  );
});

Deno.test("episode 8 test", () => {
  const text = forcem("8", LENGTH);
  assertStringIncludes(
    text[0],
    "We're not clear yet! there's still 30 pallets of cannon shells in C bunker.",
  );
});

Deno.test("episode 9 test", () => {
  const text = forcem("9", LENGTH);
  assertStringIncludes(
    text[0],
    "At last, Snoke trained you well. I killed Snoke, I'll kill you.",
  );
});

Deno.test("planets test", () => {
  const text = forcem("planets", 101);
  assertEquals(
    text.length,
    101,
  );
});

Deno.test("characters test", () => {
  const text = forcem("characters", 109);
  assertEquals(
    text.length,
    109,
  );
});
