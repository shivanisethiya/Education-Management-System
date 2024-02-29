import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ConfirmationModal from "../../../Common/ConfirmationModal"
import { useState } from "react"
import { deleteProfile } from "../../../../services/operations/SettingsAPI"

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [confirmationModal, setConfirmationModal] = useState(null)

  async function handleDeleteAccount() {
    try {
      setConfirmationModal({
        text1: "Are you sure?",
        text2: "Your Account will be permanantly deleted!!",
        btn1Text: "Delete",
        btn2Text: "Cancel",
        btn1Handler: () => dispatch(deleteProfile(token, navigate)),
        btn2Handler: () => setConfirmationModal(null),
      })
      
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <>
      <div className="my-10 flex flex-wrap gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-8 px-12">
        <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
          <FiTrash2 className="text-3xl text-pink-200" />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-richblack-5">
            Delete Account
          </h2>
          <div className="w-3/5 text-pink-25">
            <p>Would you like to delete account?</p>
            <p className=" min-w-[200px]">
              This account may contain Paid Courses. Deleting your account is
              permanent and will remove all the contain associated with it.
            </p>
          </div>
          <button
            type="button"
            className="w-fit cursor-pointer italic text-pink-300"
            onClick={handleDeleteAccount}
          >
            I want to delete my account.
          </button>
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}
