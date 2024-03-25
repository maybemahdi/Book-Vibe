import toast from "react-hot-toast";

export const getLocal = () => {
  let read = [];
  const storedLocal = localStorage.getItem("read");
  if (storedLocal) {
    read = JSON.parse(storedLocal);
  }
  return read;
};

export const save = (selected) => {
    let read = getLocal();
    const isExist = read.find((item) => item.bookId === selected.bookId);
    if (isExist) {
        return toast.error("Already Read");
    }
    toast.success("Added to read");
    read.push(selected);
    localStorage.setItem("read", JSON.stringify(read));
};

export const getLocalWishlist = () => {
  let wishlist = [];
  const storedLocal = localStorage.getItem("wishlist");
  if (storedLocal) {
    wishlist = JSON.parse(storedLocal);
  }
  return wishlist;
};
export const saveForWishlist = (selected) => {
  let wishlist = getLocalWishlist();
  const isExist = wishlist.find((item) => item.bookId === selected.bookId);
  if (isExist) {
    return toast.error("Already in Wishlist");
  }
  toast.success("Added to Wishlist");
  wishlist.push(selected);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};
