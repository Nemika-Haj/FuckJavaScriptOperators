const Questions = [
    {
        "question": "[] + 1",
        "choices": ["1", "\"1\"", "NaN", "0"],
        "answer": 1,
        "explanation": "An empty array becomes an empty string. So this is just \"\" + \"1\" => \"1\". JavaScript's idea of math is... expressive."
    },
    {
        "question": "\"5\" - 2",
        "choices": ["3", "\"3\"", "NaN", "\"52\""],
        "answer": 0,
        "explanation": "Subtraction forces both operands to become numbers. So \"5\" - 2 becomes 5 - 2 => 3. Who said strings can't subtract?"
    },
    {
        "question": "true + false",
        "choices": ["1", "\"truefalse\"", "NaN", "0"],
        "answer": 0,
        "explanation": "true is 1, false is 0, so the result is 1 + 0 = 1. Boolean algebra is secretly arithmetic."
    },
    {
        "question": "[] + []",
        "choices": ["[]", "\"\"", "0", "undefined"],
        "answer": 1,
        "explanation": "[] becomes \"\" when coerced. So \"\" + \"\" = \"\". It’s like adding silence to silence — total silence."
    },
    {
        "question": "[] + {}",
        "choices": ["\"[object Object]\"", "NaN", "\"[objectobject]\"", "0"],
        "answer": 0,
        "explanation": "Array becomes \"\", object becomes \"[object Object]\". Together: \"\" + \"[object Object]\". JS shipping string poetry by default."
    },
    {
        "question": "{} + []",
        "choices": ["0", "\"[object Object]\"", "NaN", "\"[objectobject]\""],
        "answer": 0,
        "explanation": "The first {} is treated as an empty block. So +[] = 0. Empty object? Nah, just math."
    },
    {
        "question": "null + 1",
        "choices": ["\"null1\"", "1", "NaN", "0"],
        "answer": 1,
        "explanation": "null coerces to 0 in numeric context. So, 0 + 1 = 1. Because null is nothing, and nothing is zero?"
    },
    {
        "question": "undefined + 1",
        "choices": ["1", "NaN", "0", "undefined1"],
        "answer": 1,
        "explanation": "undefined + anything is NaN. Because JS has no idea how to define 'undefined + math'."
    },
    {
        "question": "\"2\" * \"3\"",
        "choices": ["6", "\"6\"", "23", "NaN"],
        "answer": 0,
        "explanation": "Both strings are parsed as numbers. 2 * 3 = 6. JavaScript decides to be logical for a moment."
    },
    {
        "question": "\"2\" + true",
        "choices": ["\"2true\"", "3", "NaN", "1"],
        "answer": 0,
        "explanation": "String + anything = string. true => \"true\". So: \"2\" + \"true\" = \"2true\". Thanks, coercion!"
    },
    {
        "question": "\"10\" * [2]",
        "choices": ["\"102\"", "20", "NaN", "\"10\""],
        "answer": 1,
        "explanation": "\"10\" becomes 10, [2] becomes 2 => 10 * 2 = 20. Arrays try their best to help out."
    },
    {
        "question": "[2,3] * 2",
        "choices": ["10", "\"46\"", "NaN", "46"],
        "answer": 2,
        "explanation": "[2,3] turns into \"2,3\" which can't be coerced to a number. JS throws up a NaN and moves on."
    },
    {
        "question": "+[]",
        "choices": ["0", "[]", "NaN", "undefined"],
        "answer": 0,
        "explanation": "+[] forces coercion to number, which turns [] into \"\" then 0. So yeah, +[] is 0. Magic."
    },
    {
        "question": "+[1]",
        "choices": ["1", "NaN", "\"1\"", "[1]"],
        "answer": 0,
        "explanation": "[1] becomes \"1\", which becomes 1. Arrays dream of being useful numbers."
    },
    {
        "question": "+[1,2]",
        "choices": ["3", "12", "NaN", "\"1,2\""],
        "answer": 2,
        "explanation": "[1,2] => \"1,2\" => NaN when coerced to number. Arrays fail to math again."
    },
    {
        "question": "[] - 1",
        "choices": ["-1", "0", "NaN", "\"NaN\""],
        "answer": 0,
        "explanation": "[] becomes 0. So 0 - 1 = -1. Subtraction: where empty things are zero!"
    },
    {
        "question": "\"foo\" - 1",
        "choices": ["NaN", "\"foo-1\"", "undefined", "0"],
        "answer": 0,
        "explanation": "You can’t subtract a number from \"foo\" unless you're JS. But even JS goes: Nope, NaN."
    },
    {
        "question": "[1] + [2]",
        "choices": ["[1,2]", "\"12\"", "NaN", "\"1,2\""],
        "answer": 1,
        "explanation": "[1] becomes \"1\", [2] becomes \"2\". So it's \"1\" + \"2\" = \"12\". Array addition is just string vibes."
    },
    {
        "question": "{} + 1 + 2",
        "choices": ["3", "NaN", "\"[object Object]12\"", "12"],
        "answer": 0,
        "explanation": "{} is a block, so this is +1 + 2 = 3. Math disguised as nonsense."
    },
    {
        "question": "true + null",
        "choices": ["\"truenull\"", "1", "0", "NaN"],
        "answer": 1,
        "explanation": "true => 1, null => 0. 1 + 0 = 1. Feels true, right?"
    },
    {
        "question": "1 / 0",
        "choices": ["Infinity", "0", "Error", "NaN"],
        "answer": 0,
        "explanation": "Divide anything by 0 in JS? You don’t crash — you get Infinity. Zen mode."
    },
    {
        "question": "0 / 0",
        "choices": ["0", "Infinity", "NaN", "Error"],
        "answer": 2,
        "explanation": "0 / 0 is undefined in math, and JavaScript replies with a classic: NaN."
    },
    {
        "question": "-0 === 0",
        "choices": ["true", "false", "NaN", "TypeError"],
        "answer": 0,
        "explanation": "Yes, -0 === 0 is true. They look the same. Unless you're using Object.is, shhh..."
    },
    {
        "question": "\"hello\" + +[]",
        "choices": ["\"helloNaN\"", "\"hello0\"", "NaN", "\"hello[object Object]\""],
        "answer": 1,
        "explanation": "+[] => 0, so \"hello\" + 0 => \"hello0\". JS speaks emoji: 🤷‍♂️"
    },
    {
        "question": "typeof NaN",
        "choices": ["\"number\"", "\"NaN\"", "\"undefined\"", "\"object\""],
        "answer": 0,
        "explanation": "Yes, NaN is a number. The Not-A-Number number. Seriously."
    },
    {
        "question": "[null] + 1",
        "choices": ["\"null1\"", "1", "NaN", "\"1\""],
        "answer": 0,
        "explanation": "[null] becomes \"null\", so you get \"null1\". Thanks for trying, JS."
    },
    {
        "question": "[undefined] + 1",
        "choices": ["\"undefined1\"", "1", "NaN", "\"1\""],
        "answer": 0,
        "explanation": "[undefined] => \"undefined\". So, \"undefined1\" — basically word salad."
    },
    {
        "question": "{} - 1",
        "choices": ["NaN", "-1", "0", "Error"],
        "answer": 0,
        "explanation": "{} is a block, then -1 is evaluated alone. So it's NaN. Braces can't save you."
    },
    {
        "question": "[] == false",
        "choices": ["true", "false", "Error", "NaN"],
        "answer": 0,
        "explanation": "[] is falsy in comparison. So [] == false is true. JS is in a generous mood today."
    },
    {
        "question": "null == 0",
        "choices": ["true", "false", "NaN", "Error"],
        "answer": 1,
        "explanation": "null only equals undefined, not 0. So null == 0 is false. Even JS has boundaries."
    }
]

export default Questions;