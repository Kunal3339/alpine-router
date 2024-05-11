document.addEventListener('alpine:init', () => {
	window.PineconeRouter.settings.templateTargetId = 'app'
	window.PineconeRouter.add('/login', {template: '/login.html'})
	window.PineconeRouter.add('/signup', {template: '/signup.html'})
	window.PineconeRouter.add('/about', {template: '/about.html'})
})