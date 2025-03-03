import Swal from "sweetalert2";

export const errorHandler = (error: string, errorFunction: (() => void) | null = null) => {
  Swal.fire({
    icon: 'error',
    title: 'Ops...',
    text: error,
    confirmButtonColor: "#a8a8a8",
  }).then(() => {
    if (errorFunction) {
      errorFunction();
    }
  })
};
