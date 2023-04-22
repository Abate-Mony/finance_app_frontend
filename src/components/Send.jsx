import { motion } from "framer-motion"

const Send = ({ message, _ref }) => {
  return (
      <motion.div 
        initial={{ opacity: 0 ,x:100}}
        whileInView={{ opacity: 1 ,x:0}}
        viewport={{ root: _ref }}
        className="bg-blue-200  px-5 py-2  rounded-[1.5rem] ml-auto text-xs my-1 mr-2 max-w-[90%]">{message || "send box with no messages here"}
      </motion.div>
  )
}

export default Send