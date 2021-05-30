export class Singleton {
	protected static singleton: Singleton
	private constructor() {}

	static instance(): boolean {
		if (!this.singleton) {
			this.singleton = new Singleton()
			return false
		}
		return true
	}
}
