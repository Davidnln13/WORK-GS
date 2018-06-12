from database_manager import DatabaseManager

class UserManager:
	def __init__(self):
		print("UserManager: __init__")
		self.database_manager = DatabaseManager()

	def signin(self, message_data):
		"""Returns message type : string"""
		print("in user_manager.py")
		result = False
		message_type = "signin_failed"
		data = {}

		try:
			result = self.database_manager.check_password(message_data["email"],message_data["password"])
		except:
			message_type = "signin_failed"

		if result is True:
			message_type="signin_successful"
			data = self.database_manager.get_user_info(message_data)
			users = self.database_manager.get_all_users()
			data["users"] = users




		return [message_type, data]

	def signup(self, message_data):
		"""Returns message type : string"""
		data = {}
		message_type = "signup_successful"

		try:
			self.database_manager.insert_into_table("Users", message_data)
			data = self.database_manager.get_user_info(message_data)

		except:
			message_type = "signup_failed"

		message = [message_type, data]

		return message

	def update_table(self, message_data):
		"""Returns message type : string"""
		print(message_data)
		message_type = "update_table"
		data = message_data
		# try:
		self.database_manager.update_table("Users", message_data)
		# except:
		# 	message_type = "update_failed"
		message = [message_type, message_data]
		return message
