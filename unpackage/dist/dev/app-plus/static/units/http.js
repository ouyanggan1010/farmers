export const http = (fun,params) => {
	const promise = new Promise((resolve, reject) => {
           fun({
			   ...params,
			   success(result){
				   resolve(result)
			   },
			   fail(error){
				   reject(error)
			   }
		   })
	})
	return promise;
}
