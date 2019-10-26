

package sample

actual class Sample {
    actual fun checkMe() = 24
}

actual object Platform {
    actual val name: String = "JS"
}

fun main(args: Array<String>) {
    println(hello())
}