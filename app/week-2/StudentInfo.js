import Link from "next/link";

export default function StudentInfo() {
    return (
        <div>
            <p>
                Name: Sophia Canonizado
            </p>

            <p>
                GitHub Repository:{" "}
                <Link href="https://github.com/Sophia110806/cprg306-assignments">
                https://github.com/Sophia110806/cprg306-assignments
                </Link>
            </p>
        </div>
    )
}