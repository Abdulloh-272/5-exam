const btn = document.querySelector(".btn");
const ul = document.querySelector(".ul-wrap");
const body = document.querySelector(".body");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const h2 = document.querySelector(".h2");
const bgColor = document.querySelector(".bg");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector(".input");

  if (input.value) {
    localStorage.setItem("input", JSON.stringify(input.value));
    localStorage.getItem("input", JSON.stringify(input));
    const data = [{ description: input.value }];
    addList(data);
  } else if (input.value == "") {
    alert("Siz malumot kiritmadingiz iltimos molumot kiriting");
  }

  input.value = "";
});

function addList(listData = []) {
  listData.forEach((list) => {
    const li = document.createElement("li");

    li.classList.add("li");
    const del = document.createElement("i");
    const h = document.createElement("h2");
    const ic = document.createElement("i");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const check = document.createElement("i");

    div2.classList.add("flex", "gap-4", "items-center");
    div2.append(h);
    del.classList.add(
      "fa-solid",
      "fa-trash",
      "rounded-full",
      "text-slate-900",
      "items-center",
      "justify-center",
      "flex",
      "h-5",
      "w-5",
      "bg-white"
    );

    ic.classList.add(
      "fa-solid",
      "fa-check",
      "rounded-full",
      "text-slate-900",
      "items-center",
      "justify-center",
      "flex",
      "h-5",
      "w-5",
      "bg-white"
    );
    li.classList.add(
      "bg-slate-900",
      "rounded-full",
      "py-1",
      "px-5",
      "min-w-[300px]",
      "li",
      "text-white"
    );
    div3.append(ic, del);
    div3.classList.add("flex", "gap-2");
    li.classList.add("flex", "justify-between", "items-center", "mt-2");
    ic.classList.add("i");
    li.append(div2, div3);

    del.addEventListener("click", () => {
      ul.removeChild(li);
      const input = document.querySelector(".input");
    });

    li.addEventListener("click", () => {
      h.classList.toggle("line");
      li.classList.toggle("bg-slate-800");
    });

    h.textContent = list.description;
    ul.appendChild(li);
  });
}
const li = document.querySelector(".li");

btn1.addEventListener("click", () => {
  body.classList.add("from-[#545555]", "to-[#0d3241]");
  body.classList.remove("from-[#001315]", "to-[#001e28]");
  body.classList.remove("from-[#d6f2ff]", "to-[#fcffff]");
  h2.classList.remove("text-white");
  bgColor.classList.remove("bg-gray-600");
  bgColor.classList.remove("bg-[#01394c]");
  bgColor.classList.add("bg-slate-900");
  btn.classList.remove("bg-[#022531]", "text-white");
});

btn2.addEventListener("click", () => {
  body.classList.add("from-[#d6f2ff]", "to-[#fcffff]");
  body.classList.remove("from-[#545555]", "to-[#0d3241]");
  body.classList.remove("from-[#001315]", "to-[#001e28]");
  h2.classList.remove("text-white");
  bgColor.classList.add("bg-gray-600");
  bgColor.classList.remove("bg-[#01394c]");
  btn.classList.remove("bg-[#022531]", "text-white");
});

btn3.addEventListener("click", () => {
  body.classList.add("from-[#001315]", "to-[#001e28]");
  body.classList.remove("from-[#d6f2ff]", "to-[#fcffff]");
  body.classList.remove("to-[#545555]", "from-[#0d3241]");
  h2.classList.add("text-white");
  bgColor.classList.add("bg-[#01394c]");
  bgColor.classList.remove("bg-gray-600");
  btn.classList.add("bg-[#022531]", "text-white");
  bgColor.classList.remove("bg-slate-900");
});
