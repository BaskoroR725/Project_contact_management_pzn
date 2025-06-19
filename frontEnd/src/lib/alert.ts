import Swal from "sweetalert2";

export async function alertSuccess(message:string) {
  return Swal.fire({
    icon:'success' ,
    title: 'Success',
    text: message
  });
}

export async function alertError(message:string) {
  return Swal.fire({
    icon:'error' ,
    title: 'Ups',
    text: message
  });
}
