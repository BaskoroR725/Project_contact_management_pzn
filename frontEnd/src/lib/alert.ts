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

export async function alertConfirm(message:string) {
  const result = await Swal.fire({
    icon:'question' ,
    title: 'Are you sure ?',
    text: message,
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes'
  });
  return result.isConfirmed;
}
